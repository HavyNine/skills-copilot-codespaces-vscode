// Create web server with Node.js
// 1. Create a web server
// 2. Handle requests and send responses
// 3. Send HTML file to browser
// 4. Send JSON data to browser
// 5. Use query string to pass data
// 6. Use POST method to send data
// 7. Use AJAX to send data
// 8. Use AJAX to get JSON data

// Step 1: Create a web server
// 1.1 Load http module
var http = require('http');
var fs = require('fs');

// 1.2 Create server
var server = http.createServer(function(request, response) {
    // 1.3 Handle request and send response
    console.log('Request: ' + request.url);
    if (request.url === '/' || request.url === '/home') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if (request.url === '/api/comments') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        var comments = [
            {name: 'John', comment: 'Hello World!'},
            {name: 'Mary', comment: 'Hello Everyone!'}
        ];
        response.end(JSON.stringify(comments));
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

// 1.4 Listen port
server.listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');

// Step 2: Handle requests and send responses
// 2.1 Handle request and send response
var server = http.createServer(function(request, response) {
    console.log('Request: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello World!</h1>');
});

// 2.2 Listen port
server.listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');

// Step 3: Send HTML file to browser
// 3.1 Handle request and send response
var server = http.createServer(function(request, response) {
    console.log('Request: ' + request.url);
    if (request.url === '/' || request.url === '/home') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

// 3.2 Listen port
server.listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');

// Step 4: Send JSON data to browser
// 4.1 Handle request and send response
var server = http.createServer(function(request, response) {
    console.log('Request: ' + request.url);
    if (request.url === '/' || request.url === '/home') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if (request.url === '/api/comments') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        var comments = [
            {name: 'John', comment: 'Hello World!'},
            {name: 'Mary', comment: 'Hello Everyone!'}
        ];
        response.end(JSON.stringify(comments));
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

// 4.2 Listen port
server.listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');

// Step 5: Use query string to pass data
// 5.1 Handle request and send response
var server = http.createServer(function(request, response) {
    console.log('Request: ' + request.url);
    if (request.url === '/' || request.url === '/home') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if (request.url === '/api/comments') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        var url_parts = url.parse(request.url, true);
        var query = url_parts.query;
        var comments = [
            {name: query.name, comment: query.comment}
        ];
        response.end(JSON.stringify(comments));
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

// 5.2 Listen port
server.listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');

// Step 6: Use POST method to send data
// 6.1 Handle request and send response
var server = http.createServer(function(request, response) {
    console.log('Request: ' + request.url);
    if (request.url === '/' || request.url === '/home') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if (request.url === '/api/comments') {
        var body = '';
        request.on('data', function(chunk) {
            body += chunk;
        });
        request.on('end', function() {
            response.writeHead(200, {'Content-Type': 'application/json'});
            var comment = querystring.parse(body);
            var comments = [
                {name: comment.name, comment: comment.comment}
            ];
            response.end(JSON.stringify(comments));
        });
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

// 6.2 Listen port
server.listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');

// Step 7: Use AJAX to send data
// 7.1 Handle request and send response
var server = http.createServer(function(request, response) {
    console.log('Request: ' + request.url);
    if (request.url === '/' || request.url === '/home') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if (request.url === '/api/comments') {
        var body = '';
        request.on('data', function(chunk) {
            body += chunk;
        });
        request.on('end', function() {
            response.writeHead(200, {'Content-Type': 'application/json'});
            var comment = querystring.parse(body);
            var comments = [
                {name: comment.name, comment: comment.comment}
            ];
            response.end(JSON.stringify(comments));
        });
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

// 7.2 Listen port
server.listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');

// Step 8: Use AJAX to get JSON data
// 8.1 Handle request and send response
var server = http.createServer(function(request, response) {
    console.log('Request: ' + request.url);
    if (request.url === '/' || request.url === '/home') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if (request.url === '/api/comments') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        var comments = [
            {name: 'John', comment: 'Hello World!'},
            {name: 'Mary', comment: 'Hello Everyone!'}
        ];
        response.end(JSON.stringify(comments));
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

// 8.2 Listen port
server.listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');

// Path: index.html

// Path: app.js
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $scope.comment = {};
    $scope.comments = [];

    $scope.addComment = function() {
        $http.post('/api/comments', $scope.comment)
            .success(function(data) {
                $scope.comments = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $http.get('/api/comments')
        .success(function(data) {
            $scope.comments = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});


