const fs = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');
const fetch = require('@11ty/eleventy-fetch');

const clientID = process.env.IMGUR_CLIENT_ID;
const IMGUR_API_URL = 'https://api.imgur.com/3/image/';

const readFile = promisify(fs.readFile);

module.exports = async () => {
  const data = await readFile(resolve(__dirname, './history.json'), 'utf8');
  const history = JSON.parse(data);

  return Promise.all(
    history.map(({ media: { images = [] } = {} }) =>
      Promise.all(
        images
          .map(async ({ id, provider }) => {
            switch (provider) {
              case 'imgur':
                const { data } = await fetch(
                  new URL(id, IMGUR_API_URL).toString(),
                  {
                    duration: '1d',
                    fetchOptions: {
                      headers: { authorization: `Client-ID ${clientID}` },
                    },
                    type: 'json',
                  }
                ).catch(error => {
                  console.error(error);
                  return { data: {} };
                });
                return { ...data, provider };
              default:
                return null;
            }
          })
          .filter(i => !i?.id)
      )
    )
  );
};
