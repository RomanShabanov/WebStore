import React from 'react';

interface ILink {
    to: string | null;
    children: React.ReactNode
}

const Link = ({ to = null, children, ...props }: ILink) => {
    if (!to) return <span {...props}>{children}</span>;

    if (/^https?:\/\//.test(to)) return <a href={to} {...props}>{children}</a>;

    return <Link to={to} {...props}>{children}</Link>;
};

export default Link;