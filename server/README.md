# Backend

The backend of the website is made with the help of `NodeJs`, `Express`, and `MongoDB`.

## API Reference

#### Get all Places

```http
  GET /place
```

Returns

```js
{
    places: [
        {
            name: '...',
            fact: '...',
            _id: '...',
            images: [...],
            texts: [...]
        }
        ...
    ]
}

```

#### Get all Featued Places

```http
  GET /place/featured
```

Returns

```js
{
    places: [
        {
            name: '...',
            fact: '...',
            _id: '...',
            images: [...],
            texts: [...]
        }
        ...
    ]
}


```

#### Get Place

```http
  GET /place/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

Returns

```js
{
    place: {
        name: '...',
        fact: '...',
        _id: '...',
        images: [...],
        texts: [...]
    }
}
```

#### Post Place

```http
  Content-Type: application/json
  POST /place
```

Needs a JSON Body with

| Body       | Type      | Description   |
| :--------- | :-------- | :------------ |
| `name`     | `string`  | **Required**. |
| `fact`     | `string`  | **Required**. |
| `featured` | `boolean` | **Required**. |
| `texts`    | `Array`   | **Required**. |
| `Images`   | `Array`   | **Required**. |

Returns the place in JSON.

#### Patch Place

```http
  PATCH /place/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

Needs a JSON Body with

| Body       | Type      | Description   |
| :--------- | :-------- | :------------ |
| `name`     | `string`  | **Optional**. |
| `fact`     | `string`  | **Optional**. |
| `featured` | `boolean` | **Optional**. |
| `texts`    | `Array`   | **Optional**. |
| `Images`   | `Array`   | **Optional**. |

Returns

```js
{
    place: {
        name: '...',
        fact: '...',
        _id: '...',
        images: [...],
        texts: [...]
    }
}
```

#### Delete Place

```http
  DELETE /place/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

Returns

```js
{
    message: "...";
}
```

#### Post Contact

Sends the form data to the `RECV_EMAIL` from `EMAIL`

```http
  Content-Type: application/json
  POST /place
```

Needs a JSON Body with

| Body      | Type      | Description   |
| :-------- | :-------- | :------------ |
| `name`    | `string`  | **Required**. |
| `email`   | `string`  | **Required**. |
| `phone`   | `boolean` | **Required**. |
| `message` | `Array`   | **Required**. |
