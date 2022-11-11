import React from 'react';

const Blog = () => {
    return (
        <div className='h-auto bg-cyan-900 pt-2 pb-12'>
            <div className="w-2/3 mx-auto bg-slate-200 p-10 rounded-md">
                <h1 className='text-3xl font-bold' >SQL vs NoSQL: 5 Critical Differences</h1>
                <p>When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision.

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
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

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
                <h1 className='text-3xl font-bold' >What is JWT, and how does it work?</h1>
                <p>


                </p>


            </div>
        </div>
    );
};

export default Blog;