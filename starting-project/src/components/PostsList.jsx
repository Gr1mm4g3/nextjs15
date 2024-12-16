import NewPost from './NewPost'
import Post from './Post'
import styles from './PostsList.module.css'

function PostsList() {
    return (
        <>
        <NewPost />
        <ul className={styles.posts}>
            <Post author="Lesley" body="React.js is awesome!" />
            <Post author="Manuel" body="Check out the full course!" />
        </ul>
        </>
    )
}

export default PostsList
