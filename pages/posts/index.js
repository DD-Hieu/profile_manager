import Card from "react-bootstrap/Card"
import Layout from "../../components/Layout"
import { getPosts } from "../../lib/post"

const Posts = ({ posts }) => {



    return (
    <Layout>
        {posts.map(post => (
            <Card key = {post.id}>
                <Card.Body>
                    <Card.Title>
                        {post.title}
                    </Card.Title>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        ))}
    </Layout>
    )
}

// get static database from back-end
//Lay du lieu tinh

export const getStaticProps = async () => {
    const posts = await getPosts()
    
    return {
        props:{
            posts
        }
    }
}

export default Posts