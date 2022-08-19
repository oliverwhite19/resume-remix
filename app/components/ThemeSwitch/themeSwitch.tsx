import { Switch, useMantineColorScheme } from '@mantine/core';

const ThemeSwitch = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <Switch
            size="xl"
            radius="xs"
            color="red"
            onChange={() => toggleColorScheme()}
            checked={dark}
            onLabel="Light"
            offLabel="Dark"
        />
    );
};

export { ThemeSwitch };
