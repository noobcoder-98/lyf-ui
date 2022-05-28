import Menu from "components/Menu/Menu";
import React from "react";
import './index.scss';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Menu />
            <div className="info"></div>
        </div>
    )
}