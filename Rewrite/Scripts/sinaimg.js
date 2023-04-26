var modifiedHeaders = $request.headers;
modifiedHeaders['Referer'] = ' https://m.weibo.cn/';

$done({headers : modifiedHeaders});