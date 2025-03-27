FROM docker.io/library/node:18 AS build
WORKDIR /app
COPY * /app
RUN npm install

FROM gcr.io/distroless/nodejs:18 as run
WORKDIR /app
COPY --from=build /app /app
USER nonroot
CMD ["nodejs/bin/node", "."]

