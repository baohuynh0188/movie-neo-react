import { React, useState, useEffect } from "react";

const Comment = (props) => {
    return (
        <div class="fb-comments" data-href={`http://localhost:3000/${props.slug}`} data-lazy="false" data-width="880" data-numposts="20"></div>
    )
}

export default Comment
