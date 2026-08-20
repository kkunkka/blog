import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// 自定义页脚：还原旧 Hugo 站点的备案信息（图标 + 浙公网安备号 + 浙ICP备号）
// 以及版权行。替换 Docusaurus 默认 Footer（原配置中 footer 为注释状态，未启用）。
export default function Footer() {
  const { siteConfig } = useDocusaurusContext();
  const year = new Date().getFullYear();
  const beianIcon = useBaseUrl('/images/beian.png');

  return (
    <footer className={clsx('footer', 'footer--dark')}>
      <div className="container container--fluid">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            fontSize: '0.875rem',
            padding: '0.5rem 0',
          }}
        >
          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=33010802014142"
            rel="noreferrer"
            target="_blank"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <img
              src={beianIcon}
              alt="备案图标"
              style={{ height: '16px', verticalAlign: 'middle' }}
            />
            <span>浙公网安备33010802014142号</span>
          </a>
          <a
            href="https://beian.miit.gov.cn/"
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            浙ICP备2025212719号-1
          </a>
        </div>
        <div className="footer__bottom text--center" style={{ paddingBottom: '1rem' }}>
          <div className="footer__copyright">
            Copyright © {year} {siteConfig.title}. Built with Docusaurus.
          </div>
        </div>
      </div>
    </footer>
  );
}
