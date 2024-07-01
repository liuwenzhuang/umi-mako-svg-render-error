import { ReactComponent as OrganizationFilled } from "@/assets/OrganizationFilled.svg";
import { ReactComponent as TeamTwoTone } from "@/assets/TeamTwoTone.svg";
import goodJpg from "../assets/good.jpg";

export default function HomePage() {
  return (
    <div>
      <h2>不启动 mako 的正常结果：</h2>
      <p>
        <img src={goodJpg} width="256px" />
      </p>
      <h2>启用 mako 的渲染结果：</h2>
      <p>
        <TeamTwoTone style={{ width: "6rem" }} />
        <OrganizationFilled style={{ width: "6rem" }} />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
