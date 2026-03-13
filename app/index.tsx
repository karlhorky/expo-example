import { Link, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '@/constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 24,
  },
  introText: {
    color: colors.text,
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  link: {
    marginVertical: 6,
    color: colors.text,
    fontFamily: fonts.body,
    fontSize: 15,
    backgroundColor: colors.cardBackground,
    paddingTop: 11,
    paddingBottom: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    lineHeight: 20,
  },
  usersHeading: {
    marginTop: 28,
    color: colors.text,
    fontFamily: fonts.heading,
    fontSize: 22,
  },
  list: {
    width: '100%',
    marginTop: 12,
  },
  item: {
    marginVertical: 4,
    paddingTop: 11,
    paddingBottom: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    justifyContent: 'center',
  },
  name: {
    color: colors.text,
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 20,
  },
});

type RandomUserApiResponseBody = {
  results: [
    {
      login: {
        uuid: string;
      };
      name: {
        first: string;
        last: string;
      };
    },
  ];
};

type User = {
  id: string;
  name: string;
};

export default function HomeScreen() {
  const [users, setUsers] = useState<User[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function fetchUser() {
        const response = await fetch('https://randomuser.me/api/');
        const data = (await response.json()) as RandomUserApiResponseBody;

        console.log(data.results[0]);
        setUsers((prevUsers) => {
          return [
            ...prevUsers,
            {
              id: data.results[0].login.uuid,
              name: `${data.results[0].name.first} ${data.results[0].name.last}`,
            },
          ];
        });
      }

      fetchUser().catch((error) => {
        console.error(error);
      });
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.introText}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/about" style={styles.link}>
        About the app
      </Link>
      <Link href="/animals" style={styles.link}>
        Animals
      </Link>
      <Link href="/animals/1" style={styles.link}>
        View Animal 1
      </Link>
      <Link href="/animals/2" style={styles.link}>
        View Animal 2
      </Link>

      <Text style={styles.usersHeading}>Users</Text>
      <FlatList
        style={styles.list}
        data={users}
        renderItem={({ item }) => <UserItem name={item.name} />}
      />
    </View>
  );
}

type UserItemProps = {
  name: string;
};

function UserItem(props: UserItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}
