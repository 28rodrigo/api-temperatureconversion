# Temperature Conversion API
Node.js Api for temperature conversion (Celsius <-> Fahrenheit)
# Documentation

### **GET** - "/fahrenheit/{value}/celsius"

> Input

 | Parameter |  Type  |          Description         |
 |:---------:|:------:|:----------------------------:|
 |   Value   | number | Value that will be converted |

> Output

| Parameter |  Type  |   Description   |
|:---------:|:------:|:---------------:|
|  celsius  | number | Value converted |
| machine   | string | Machine Id      |
|           |        |                 |
> Response - example
```json
{
  "celsius": 28,
  "machine": "de3a9a1afd5f"
}
```

### **GET** - "/celsius/{value}/fahrenheit"

> Input

 | Parameter |  Type  |          Description         |
 |:---------:|:------:|:----------------------------:|
 |   Value   | number | Value that will be converted |

> Output

|  Parameter |  Type  |   Description   |
|:----------:|:------:|:---------------:|
| fahrenheit | number | Value converted |
|   machine  | string | Machine Id      |
|            |        |                 |
> Response - example
```json
{
  "fahrenheit": 68,
  "machine": "de3a9a1afd5f"
}
```
# Docker Image

Docker image available at: https://hub.docker.com/r/28rodrigo/conversionapi
