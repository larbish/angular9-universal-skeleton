#############
### build ###
#############

# base image
FROM mhart/alpine-node:14.15.5 AS builder

ARG target
ENV target=${target}
# set working directory
WORKDIR /app

COPY . /app
RUN npm set progress=false
RUN npm ci

# generate build
RUN npm run "build:ssr-${target}"

############
### prod ###
############

# base image
FROM node:12-alpine

WORKDIR /app

# copy artifact build from the 'build environment'
COPY --from=builder /app/package.json /app
RUN npm i express cookie-parser compression

# Get all the code needed to run the app
COPY --from=builder /app/dist /app/dist

EXPOSE 80
ENV PORT 80
ENV NODE_ENV production
ENTRYPOINT ["npm", "run"]
CMD ["serve:ssr"]
