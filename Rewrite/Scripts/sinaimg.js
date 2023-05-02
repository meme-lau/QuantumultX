var modifiedHeaders = $request.headers;
modifiedHeaders['Referer'] = 'https://weibo.com/';

$done({headers : modifiedHeaders});
