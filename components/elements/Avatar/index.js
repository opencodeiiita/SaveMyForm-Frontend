import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";
import React from "react";
function Avatar({ seed }) {
    let svg = createAvatar(style, {
        seed: seed,
        dataUri: true,
        scale: 80,
    });

    return <img src={svg} />;
}

export default Avatar;
