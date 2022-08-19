import { newSpecPage } from '@stencil/core/testing';
import { SearchComponent } from './search-component';

describe('search-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SearchComponent],
      html: '<search-component></search-component>',
    });
    expect(root).toEqualHtml(`
      <search-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </search-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SearchComponent],
      html: `<search-component first="Stencil" last="'Don't call me a framework' JS"></search-component>`,
    });
    expect(root).toEqualHtml(`
      <search-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </search-component>
    `);
  });
});
