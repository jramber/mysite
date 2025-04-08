/*
export const handler = async (event) => {
    const reponse = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from Lambda!",
            input: event,
        }),
    }
}
*/

import fs from 'fs';

export const handler = async (event) => {
  const route = event.rawPath || event.path;
  if (route === '/default/' || route === '/default/index.html') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: fs.readFileSync('index.html', 'utf8'),
    };
  } else if (route === '/default/style.css') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/css' },
      body: fs.readFileSync('style.css', 'utf8'),
    };
  } else if (route === '/default/scripts.js') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/javascript' },
      body: fs.readFileSync('scripts.js', 'utf8'),
    };
  }

  return {
    statusCode: 404,
    body: "Not found",
  };
};

