import { Group, Text } from '@mantine/core';
import { IconBolt } from '@tabler/icons';
import Link from 'next/link';

export const Logo = () => {
  return <Link href={'/'}>
    <Group spacing="xs" sx={{cursor: 'pointer'}}>
      <IconBolt />
      <Text>
        ELECTRO STORE
      </Text>
    </Group>
  </Link>;
};
