ARG project=quark
# ============= BUILD STAGE ==========================
#=====================================================
FROM node:12-alpine AS builder
ARG project

WORKDIR /${project}

COPY . .

RUN npm i --silent

RUN npm run build

# ============= FINAL STAGE ==========================
#=====================================================
FROM node:12-alpine
ARG project

ENV NODE_ENV prod

COPY --from=builder /${project}/package-lock.json ${project}/
COPY --from=builder /${project}/package.json ${project}/
COPY --from=builder /${project}/dist/ ${project}/dist/

WORKDIR /${project}

RUN npm i --only=prod --silent

EXPOSE 8001
CMD node dist/src/index.js