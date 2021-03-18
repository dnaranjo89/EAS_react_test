# Logs

- Errors can be found in [Sentry](https://sentry.io/organizations/etcaterva/issues/?environment=production&project=1247679) (30 days history)
- Access logs (Nginx) cane be found in [Kibana](https://app.logz.io/#/goto/aab1020b648b8aadc78ba2fd8cf15ed3?switchToAccountId=64805)

# Business metrics

**Important**: Mixpanel is currently disabled

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
| Item           |
| Link Sets      |
| Number         |
| Letter         |
| Raffle         |
| FacebookRaffle |
| Spin Arrow     |
| Coin           |
| Dice           |
| Secret Santa   |

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
