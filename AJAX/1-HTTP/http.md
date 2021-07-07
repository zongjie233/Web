# HTTP

## 请求报文

格式参数

```
行  POST /s?ie=utf-8 HTTP/1.1
头  Host:zdq.com
    Cookie:name = zdq
    Content-type:application/x-www-form-urlencoded
    User-Agent:chrome 83
空行 POST可为空，GET一定为空
```

## 响应报文

```
行      HTTP/1.1
头      Content-Type:text/html;charser=utf-8
        Content-length:2048
        Content-encoding:gzip

空行
体      <html></html>
```
