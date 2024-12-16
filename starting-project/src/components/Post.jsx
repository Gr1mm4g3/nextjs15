const names = ['Maximilian', 'Manuel'];

function Post(){

    // Component logic
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];


    return (
        <div>
            {/*<p>{2+2}</p>*/}
            <p>{chosenName}</p>
            <p>React.js is awesome!</p>
        </div>
    );
}

export default Post;