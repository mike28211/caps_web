import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Modal, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootLayout } from '../navigation/RootLayout';

export const PostDetailsScreen = ({ route, navigation }) => {
  const { postId, postTitle, postContent, postAuthor, postTime, userId } = route.params;

  // Sample data for comments
  const [comments, setComments] = useState([
    { id: '1', author: 'User1', content: 'This is so insightful!', time: '1h ago', userId: 'user1' },
    { id: '2', author: 'User2', content: 'I completely agree!', time: '2h ago', userId: 'user2' },
  ]);

  // State for new comment input
  const [newComment, setNewComment] = useState('');

  // React state (likes)
  const [likes, setLikes] = useState(10);
  const [userReacted, setUserReacted] = useState(null); // 'like' or null

  // State for modals
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [commentToEdit, setCommentToEdit] = useState(null);

  // State for showing/hiding comments
  const [showComments, setShowComments] = useState(false);

  // Handle comment submission
  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: String(comments.length + 1),
        author: 'You', // or the user's username
        content: newComment,
        time: 'Just now',
        userId: userId, // ID of the user adding the comment
      };
      setComments([newCommentObj, ...comments]);
      setNewComment(''); // Clear the input after submission
    } else {
      Alert.alert('Error', 'Please enter a comment before submitting.');
    }
  };

  // Handle post reaction (like)
  const handleReact = () => {
    if (userReacted !== 'like') {
      setLikes(likes + 1);
      setUserReacted('like');
    } else {
      setLikes(likes - 1);
      setUserReacted(null);
    }
  };

  // Handle editing a comment
  const handleEditComment = (commentId) => {
    const commentToEdit = comments.find(comment => comment.id === commentId);
    setCommentToEdit(commentToEdit);
    setIsEditModalVisible(true);
  };

  // Save edited comment
  const saveEditedComment = () => {
    setComments(comments.map(comment =>
      comment.id === commentToEdit.id
        ? { ...comment, content: commentToEdit.content }
        : comment
    ));
    setIsEditModalVisible(false);
  };

  // Handle deleting a comment
  const handleDeleteComment = (commentId) => {
    Alert.alert(
      'Delete Comment',
      'Are you sure you want to delete this comment?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => setComments(comments.filter(comment => comment.id !== commentId)) },
      ]
    );
  };

  // Handle reporting a post or comment
  const handleReport = (type, id) => {
    // Implement reporting functionality here (e.g., API call)
    Alert.alert(`Report ${type}`, `You have reported the ${type}.`);
    setIsReportModalVisible(false);
  };

  // Toggle comments visibility
  const toggleComments = () => {
    setShowComments(prevState => !prevState);
  };

  // Render each comment
  const renderCommentItem = ({ item }) => (
    <View style={styles.commentContainer}>
      <Text style={styles.commentAuthor}>{item.author}</Text>
      <Text style={styles.commentContent}>{item.content}</Text>
      <Text style={styles.commentTime}>{item.time}</Text>
      {item.userId === userId && (
        <View style={styles.commentActions}>
          <TouchableOpacity onPress={() => handleEditComment(item.id)}>
            <Ionicons name="create-outline" size={20} color="#007bff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteComment(item.id)}>
            <Ionicons name="trash-outline" size={20} color="#dc3545" />
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={() => setIsReportModalVisible(true)}>
        <Ionicons name="flag-outline" size={20} color="#dc3545" />
      </TouchableOpacity>
    </View>
  );

  return (
    <RootLayout navigation={navigation} screenName="Post Details">
      <View style={styles.container}>
        {/* Post Details */}
        <Text style={styles.postTitle}>{postTitle}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.timeText}>{postTime}</Text>
          <Text style={styles.authorText}>by {postAuthor}</Text>
        </View>
        <Text style={styles.postContent}>{postContent}</Text>
        
        <View style={styles.reactContainer}>
          <TouchableOpacity onPress={toggleComments} style={styles.commentButton}>
            <Ionicons name="chatbox-ellipses-outline" size={20} color="#000000" />
            <Text style={styles.commentCountText}>{comments.length}</Text>
          </TouchableOpacity>

          {/* Reaction Section */}
          <TouchableOpacity
            style={[styles.reactButton, userReacted === 'like' && styles.activeReactButton]}
            onPress={handleReact}
          >
            <Ionicons name="heart-outline" size={24} color={userReacted === 'like' ? '#d9534f' : '#333'} />
            <Text style={styles.reactText}>{likes}</Text>
          </TouchableOpacity>
        </View>

        {/* Comment Section */}
        {showComments && (
          <>
            <Text style={styles.commentSectionTitle}>Comments</Text>
            <FlatList
              data={comments}
              renderItem={renderCommentItem}
              keyExtractor={(item) => item.id}
              style={styles.commentList}
            />
          </>
        )}

        {/* New Comment Input */}
        <View style={styles.addCommentContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Write a comment..."
            value={newComment}
            onChangeText={setNewComment}
          />
          <TouchableOpacity style={styles.submitCommentButton} onPress={handleAddComment}>
            <Text style={styles.submitCommentButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <Modal
          visible={isEditModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setIsEditModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.commentInput}
              value={commentToEdit?.content}
              onChangeText={(text) => setCommentToEdit({ ...commentToEdit, content: text })}
            />
            <TouchableOpacity style={styles.submitCommentButton} onPress={saveEditedComment}>
              <Text style={styles.submitCommentButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* Report Modal */}
        <View style={styles.centeredView}>
          <Modal
            visible={isReportModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setIsReportModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.reportButton} onPress={() => handleReport('post', postId)}>
                <Text style={styles.reportButtonText}>Report Post</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.reportButton} onPress={() => handleReport('comment', commentToEdit?.id)}>
                <Text style={styles.reportButtonText}>Report Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={() => setIsReportModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View> 
    </RootLayout>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timeText: {
    fontSize: 12,
    color: '#6c757d',
  },
  authorText: {
    fontSize: 12,
    color: '#6c757d',
  },
  postContent: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  reactContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  reactText: {
    marginLeft: 5,
    fontSize: 16,
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  commentCountText: {
    marginLeft: 5,
    fontSize: 16,
  },
  commentSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentList: {
    marginBottom: 20,
  },
  commentContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  commentContent: {
    fontSize: 14,
    color: '#333',
  },
  commentTime: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 5,
  },
  commentActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  submitCommentButton: {
    backgroundColor: '#7129F2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  submitCommentButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  reportButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  reportButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default PostDetailsScreen;
