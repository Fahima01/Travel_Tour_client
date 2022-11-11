import React from 'react';

const Blog = () => {
    return (
        <div className='h-auto bg-cyan-900 pt-2 pb-12'>
            <div className="w-2/3 mx-auto bg-slate-200 p-10 rounded-md">
                <h1 className='text-3xl font-bold' >SQL vs NoSQL: 5 Critical Differences</h1>
                <p className='py-5'>When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision.

                    Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available.

                    <strong>The five critical differences between SQL vs NoSQL are:</strong>

                    <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</li>

                </p>
            </div>

            <div className='w-2/3 mt-6 mx-auto bg-slate-200 p-10 rounded-md'>
                <h1 className='text-3xl font-bold' >What is JWT, and how does it work?</h1>
                <p className='py-5'>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    Once decoded, you will get two JSON strings:

                    The header and the payload.
                    The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                    The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>
            </div>
            <div className='w-2/3 mt-6 mx-auto bg-slate-200 p-10 rounded-md'>
                <h1 className='text-3xl font-bold' >What is the difference between javascript and NodeJS?</h1>
                <p className='py-5'>

                    1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                    As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.

                    2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

                    3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.

                    4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                    Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.

                    5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

                    Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.

                    If you’re interested in becoming a Node.js developer, check out KnowledgeHut’s  best Node.js course today to get started.
                </p>
            </div>
            <div className='w-2/3 mt-6 mx-auto bg-slate-200 p-10 rounded-md'>
                <h1 className='text-3xl font-bold' >How does NodeJS handle multiple requests at the same time?</h1>
                <p className='py-5'>
                    Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                    No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.

                    Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.

                    The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.

                    NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                    NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                    So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                    The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                    If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.

                    How is NodeJS better than traditional multithreaded request response model?
                    With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.
                </p>
            </div>
        </div>
    );
};

export default Blog;