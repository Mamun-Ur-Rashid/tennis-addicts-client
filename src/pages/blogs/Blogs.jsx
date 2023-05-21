import React from 'react';
import useTitle from '../../hook/useTitle';

const Blogs = () => {
    useTitle("Blogs")
    return (
        <div className='my-14 p-8 bg-[rgb(234,239,240)] rounded-xl'>
            <h1 className='text-center text-5xl font-bold mb-5'>Blogs</h1>
            <div>
                <div className='w-3/4 mx-auto shadow-2xl bg-base-100 rounded-xl p-8'>
                    <h4>Question: 1: What is an access token and refresh token? How dot they work and where should we store them on the client-side?</h4> <br />
                    <p>Ans: <br /> A refresh toke just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access toke is re-issued, provided the refresh toke is a valid one requesting permission to access confidential resources. <br />
                        The client credentials flow is a way to obtain access tokens by using only the client's credentials, without involving the user. It is suitable for server-to-server applications that need to access protected resources that belong to the client itself, such as APIs or microservices. The flow involves one step:- The client sends its credentials and the desired scope to the authorization server and requests an access token.The client uses the access token to access the protected resources until it expires. The client credentials flow does not support refresh tokens, because there is no user involved in the process. Therefore, the client has to request a new access token when the previous one expires. </p>
                </div>
                <div className='w-3/4 mx-auto shadow-2xl bg-base-100 rounded-xl p-8 my-5'>
                    <h4>Question: 2: Compare SQL and NoSQL database?</h4> <br />
                    <p>Ans: <br /> SQl: SQL databases define and manipulate data-based Structured query language. Seeing form a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, ist can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it, also, all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                        <br />NoSQL: A NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-base, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
                </div>
                <div className='w-3/4 mx-auto shadow-2xl bg-base-100 rounded-xl p-8'>
                    <h4>Question: 3: What is express.js and Next.js? </h4> <br />
                    <p>Ans: <br /> Express.js: Express.js is a popular and lightweight web application framework for Node.js. It provides a robust set of features and tools for building web applications and APIs. Express.js simplifies the process of creating server-side applications by providing a minimalistic and flexible framework.
                        <br />Features of Express.js :
                        <br />1. Routing <br />2. Middleware <br />3.Templating <br />4. Error handling <br />5.Entegration with Node.js <br /> <br /> Nest.js: Next.js is a popular framework for building server-rendered react applications. it is built on top of react and Node.js, providing a powerful tollset for creating production-ready web applications with server-side rendering.
                        <br />Features of Next.js: <br />1. server-side rendering <br />2. static site generation <br /> 3. Automatice code splitting <br />4. Hot module replacement <br />5. API routes <br />6. css-in-js Support. <br />7. Rich ecosystem and community  </p>
                </div>
                <div className='w-3/4 mx-auto shadow-2xl bg-base-100 rounded-xl p-8 mt-5'>
                    <h4>Question: 4: What is MongoDB aggregate and how does it work?</h4> <br />
                    <p>Ans: <br />
                        In MongoDB, the aggregate method is used to perform advanced data aggregation operations on a collection. It allows you to process and transform documents using various stages in a pipeline. The aggregation framework provides powerful capabilities for grouping, filtering, sorting, and performing computations on data.
                        The basic structure of an aggregation pipeline in MongoDB consists of one or more stages that are applied sequentially to the documents in a collection. Each stage receives input from the previous stage and produces output that serves as input for the subsequent stage. Here's an overview of some commonly used stages: <br />
                        1. $match: Filters the documents based on specified conditions, similar to the query in find operations. <br />
                        2. $group: Groups documents together based on a specified key and performs calculations or aggregations within each group.<br />
                        3. $sort: Sorts the documents based on one or more fields in ascending or descending order.<br />
                        4. $project: Reshapes the documents and includes or excludes specific fields. It can also add computed fields or transform existing fields.<br />
                        5. $limit and $skip: Controls the number of documents to include or skip in the output. <br />
                        6. $lookup: Performs a left outer join with another collection, allowing you to combine data from multiple collections.<br /> </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
