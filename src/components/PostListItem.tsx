import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import {Post} from '../type' 
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

type PostListItemProps = {
    post:Post;
};

type FooterButtonProp = {
    text:string,
    icon: React.ComponentProps<typeof FontAwesome>['name']
};

const FooterButton = ({ text, icon }: FooterButtonProp) => (
    <View style={styles.footerButton}>
      <FontAwesome name={icon} size={16} color="gray" />
      <Text style={styles.footerButtonText}>{text}</Text>
    </View>
  );
  

const PostListItem = ({post}: PostListItemProps) => {
    return(
      <Link href={`/posts/${post.id}`} asChild>
        <Pressable style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri:post.author.image }} style={styles.userImage} />
                <View>
                    <Text style={styles.userName}>{post.author.name}</Text>
                    <Text style={styles.position}>{post.author.position}</Text>
                </View>
            </View>
            <Text style={styles.content}>{post.content}</Text>
                {post.image && (
                    <Image source={{uri: post.image}} style={styles.container} />
                )}
            <View style={styles.footer}>
                <FooterButton text="Like" icon="thumbs-o-up" />
                <FooterButton text="Comment" icon="comment-o" />
                <FooterButton text="Share" icon="share" />
            </View>
        </Pressable>
        </Link>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      maxWidth: 600,
      width: '100%',
      alignSelf: 'center',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    userImage: {
      width: 50,
      aspectRatio: 1,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontWeight: '600',
      marginBottom: 5,
    },
    position: {
      fontSize: 12,
      color: 'grey',
    },
    content: {
      margin: 10,
      marginTop: 0,
    },
    postImage: {
      width: '100%',
      aspectRatio: 1,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: 'lightgray',
    },
    footerButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    footerButtonText: {
      marginLeft: 5,
      color: 'gray',
      fontWeight: '600',
    },
  });

  export default PostListItem;