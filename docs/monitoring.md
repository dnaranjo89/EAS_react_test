# Logs

- Errors can be found in Sentry (30 days history)
- All logs can be found in Kibana (2 days history)

| Logs                             | type                           | Link                                                                                               | Notes                                              | Source                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend - client side           | -                              | [Sentry](https://sentry.io/organizations/etcaterva/issues/?environment=production&project=1247679) | You can choose the environment in the top dropdown | Errors are sent to Sentry ([see config](https://github.com/etcaterva/eas-frontend/blob/7119c752037d2e83399e36f5d47f042422b28351/src/index.js#L27-L28)).                                                                                                                                                                                                                                                                                       |
| Frontend - server side (express) | echaloasuerte-3-nodejs-comined | [Kibana](https://app.logz.io/#/goto/28c77005ae700f28b2ba98384c75923a?switchToAccountId=64805)      | Severity is indicated by the `level` attribute     | All logs are written in the `combined.log` file using winston ([see config](https://github.com/etcaterva/eas-frontend/blob/7119c752037d2e83399e36f5d47f042422b28351/src/logging.js#L32-L40)). <br>Error logs are also written to the `error.log` using winston ([see config](https://github.com/etcaterva/eas-frontend/blob/7119c752037d2e83399e36f5d47f042422b28351/src/logging.js#L32-L40)) and sent to Sentry, using their request handler |
| Frontend - access logs (express) | echaloasuerte-3-nodejs-access  | [Kibana](https://app.logz.io/#/goto/c0e27ddad055c2ecbc0bba1816110f1a?switchToAccountId=64805)      |                                                    | Access logs are written to the `access.log` file, using morgan ([see config](https://github.com/etcaterva/eas-frontend/blob/7119c752037d2e83399e36f5d47f042422b28351/src/logging.js#L73))                                                                                                                                                                                                                                                     |
| Nginx                            | nginx                          | [Kibana](https://app.logz.io/#/goto/aab1020b648b8aadc78ba2fd8cf15ed3?switchToAccountId=64805)      |                                                    |

# Business metrics

We send events to Google Analytics (GA) and Mixpanel (MP). The only reason to use Mixpanel is to analise funnels, as the free GA account doesn't allow to build funnels from events.

We use specific event names in Mixpanel (e.g. we use _Toss - Groups_ instead of _Toss_) because the free MP account does not allow using custom events.

## Table of Contents

1. [Toss](#toss)
1. [Publish](#publish)
1. [Start Public Draw](#start-public-draw)
1. [Social Share Draw](#social-share-draw)
1. [Participate in Raffle](#participante-in-raffle)

## Draw Types

| Draw types     |
| -------------- |
| Groups         |
| Spin Arrow     |
| Coin           |
| Raffle         |
| FacebookRaffle |

## Events

### Toss

#### GA

| key      | value       |
| -------- | ----------- |
| Category | {draw_type} |
| Action   | Toss        |

#### Mixpanel

| key                | value              |
| ------------------ | ------------------ |
| Name               | Toss - {draw_type} |
| Property: drawType | {draw_type}        |

### Publish

#### GA

| key      | value       |
| -------- | ----------- |
| Category | {draw_type} |
| Action   | Publish     |
| Label    | {draw_id}   |

#### Mixpanel

| key                | value                 |
| ------------------ | --------------------- |
| Name               | Publish - {draw_type} |
| Property: drawType | {draw_type}           |
| Property: drawId   | {draw_id}             |

### Start Public Draw

#### GA

| key      | value                             |
| -------- | --------------------------------- |
| Category | {draw_type}                       |
| Action   | Start Public                      |
| Label    | {From Scratch, From Quick Result} |

#### Mixpanel

| key                | value                             |
| ------------------ | --------------------------------- |
| Name               | Start Public - {draw_type}        |
| Property: drawType | {draw_type}                       |
| Property: source   | {From Scratch, From Quick Result} |

### Social Share Draw

#### GA

| key      | value             |
| -------- | ----------------- |
| Category | {draw_type}       |
| Action   | Social Share Draw |
| Label    | {social_type}     |

#### Mixpanel

| key                  | value                           |
| -------------------- | ------------------------------- |
| Name                 | Social Share Draw - {draw_type} |
| Property: drawType   | {draw_type}                     |
| Property: socialType | {social_type}                   |

| Social types |
| ------------ |
| facebook     |
| twitter      |
| telegram     |
| whatsapp     |
| email        |

### Participate in Raffle

#### GA

| key      | value       |
| -------- | ----------- |
| Category | {draw_type} |
| Action   | Participate |

#### Mixpanel

| key                | value                     |
| ------------------ | ------------------------- |
| Name               | Participate - {draw_type} |
| Property: drawType | {draw_type}               |
