import Layout from "components/Layout";
import ItemList, { ItemProps } from "app/ItemList";
import { getPlaiceholder } from "plaiceholder";

import items from "public/data/items.json";

async function getItems(): Promise<ReadonlyArray<ItemProps>> {
  return await Promise.all(
    items.map(async (item) => {
      const plaiceholder = await getPlaiceholder(
        `/assets/images/${item.image}`
      );

      return {
        ...item,
        blurDataURL: plaiceholder.base64,
      };
    })
  );
}

export default async function Home() {
  const items = await getItems();

  return (
    <Layout>
      <ItemList items={items} />
    </Layout>
  );
}
