import Findus from "./Findus";
import Qzone from "./Qzone";
import SocialLogin from "./SocialLogin";


const RightAside = () => {
    return (
        <div className="space-y-8">
            <SocialLogin></SocialLogin>
            <Findus></Findus>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;