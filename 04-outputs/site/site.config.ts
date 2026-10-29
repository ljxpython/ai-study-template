export interface CollectionConfig {
  id: string;
  title: string;
  description: string;
  order: number;
  sectionMode?: 'flat' | 'collapsible';
  notice?: string;
  sourceLabel?: string;
  sourceUrl?: string;
}

export const site = {
  title: '技术研学与框架深潜专栏',
  description: '基于 ai-study-template 构建的独立专题研学站点，专注于架构剖析、代码实操与生产落地。',
  author: 'ljxpython',
  url: 'https://ljxpython.github.io',
  base: '',
  repositoryUrl: 'https://github.com/ljxpython/ai-study-template',
  accent: {
    primary: '#0284c7',
    soft: '#e0f2fe',
  },
  navigation: {
    label: '研学专栏',
    sourceLabel: '模板源码',
  },
  links: {
    github: 'https://github.com/ljxpython/ai-study-template',
  },
  collections: [
    {
      id: 'foundations',
      title: '核心认知',
      description: '从思维模型与最小可用实践开始，理清脉络。',
      order: 1,
      sectionMode: 'collapsible' as const,
      sourceLabel: '查看源码',
      sourceUrl: 'https://github.com/ljxpython/knowledge-site-template',
      notice: '示例代码仅供学习参考。若要在本地测试，请手动执行相应命令。',
    },
    {
      id: 'practice',
      title: '工程实践',
      description: '将实践经验转化为可复现的高质量工作流。',
      order: 2,
      sectionMode: 'flat' as const,
      sourceLabel: '查看源码',
      sourceUrl: 'https://github.com/ljxpython/knowledge-site-template',
    },
  ],
} as const;

export default site;
