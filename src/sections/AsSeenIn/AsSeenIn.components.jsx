import { LOGO_1, LOGO_2, LOGO_3 } from "./AsSeenIn.constants";

const LogoRow = () => (
    <div className="flex items-center *:h-7.5 *:mx-[50px] max-[900px]:*:mx-[25px] max-[900px]:*:max-h-5">
      <img src={LOGO_1} />
      <img src={LOGO_2} />
      <img src={LOGO_1} />
      <img src={LOGO_3} />
    </div>
  );

  export default LogoRow