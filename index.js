const { ApolloServer, gql } = require('apollo-server');
//这是一个书籍查询的例子，我们实际上可以从一个现有服务器获取更为详实的例子
const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
]

//定义你数据的形态，指明哪些方式可以从gql服务器获取数据
const typeDefs = gql`
    # 请用(#)注释
    # 前边定义的类型后边也可以使用
    # 这个Book类型的定义像是个构造器

    type Book {
        title: String
        author: String
    }


    # 查询类型是所有gql查询的根源
    type Query {
        books: [Book]
    }
`;

//解析器定义从模式中抓取的数据类型，
//从这里获取上边我们定义的数组，用作实际返回值
const resolvers = {
    Query: {
      books: () => books,
    },
};

//创建服务实例
const server = new ApolloServer({ typeDefs, resolvers });

//启动在对应端口
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});