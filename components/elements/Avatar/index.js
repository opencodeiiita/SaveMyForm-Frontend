import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";

function Avatar({ seed }) {
    let svg = createAvatar(style, {
        seed: seed, //random avatar will be generated when the users' name is placed here.
        dataUri: true,
        scale: 80,
    });

    return <img src={svg} />;
}

export default Avatar;
