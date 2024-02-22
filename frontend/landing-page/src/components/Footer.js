import React from "react";
import { Layout } from "antd";

import "../css/footer.css"; // Import the CSS file

const { Footer: AntdFooter } = Layout;

export function Footer() {
  return (
    <AntdFooter className="footer">
      Copyright &copy; 2023 Condor Hero All right reserved
    </AntdFooter>
  );
}
