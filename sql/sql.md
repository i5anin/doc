# SQL

#### Таблица: logs

| Поле       | Тип     | Дополнительно | Примечания |
| ---------- | ------- | ------------- | ---------- |
| update_id  | INTEGER | PRIMARY KEY   | NOT NULL   |
| date       | INTEGER | -             | NOT NULL   |
| message_id | INTEGER | -             | NOT NULL   |
| from_id    | INTEGER | -             | NOT NULL   |
| chat_id    | INTEGER | -             | NOT NULL   |
| text       | TEXT    | -             | NOT NULL   |

#### Таблица: users

| Поле        | Тип     | Дополнительно | Примечания |
| ----------- | ------- | ------------- | ---------- |
| telegram_id | INTEGER | PRIMARY KEY   | NOT NULL   |
| first_name  | TEXT    | -             | NOT NULL   |
| user_name   | TEXT    | -             | NOT NULL   |
| type        | INTEGER | -             | NOT NULL   |
| alias_id    | INTEGER | -             | NOT NULL   |

#### Таблица: events

| Поле         | Тип  | Дополнительно | Примечания |
| ------------ | ---- | ------------- | ---------- |
| update_id    | TEXT | PRIMARY KEY   | NOT NULL   |
| chain_adders | TEXT | -             | NOT NULL   |
| code         | TEXT | -             | NOT NULL   |
| memo         | TEXT | -             |            |

#### Таблица: rules

| Поле        | Тип  | Дополнительно | Примечания |
| ----------- | ---- | ------------- | ---------- |
| telegram_id | TEXT | PRIMARY KEY   | NOT NULL   |
| code        | TEXT | -             |            |

#### Таблица: links

| Поле    | Тип     | Дополнительно | Примечания |
| ------- | ------- | ------------- | ---------- |
| chat_id | INTEGER | PRIMARY KEY   | NOT NULL   |
| user_id | INTEGER | PRIMARY KEY   | NOT NULL   |
| status  | INTEGER |               |            |

#### Таблица: flags

| Поле | Тип     | Дополнительно | Примечания |
| ---- | ------- | ------------- | ---------- |
| code | INTEGER | PRIMARY KEY   | NOT NULL   |
| memo | TEXT    | -             |            |
