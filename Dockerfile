FROM nginx:alphine
COPY /dist/weather-app /usr/share/nginx/html
EXPOSE 80