import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const { width } = Dimensions.get('window'); // Get screen width

export const ForumsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Greeting and Subtext */}
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Forums</Text>
          <Text style={styles.subText}>Connect, Discuss, and Support</Text>
        </View>

        {/* Icons for Add and Search */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SelfAssessment')}>
            <Ionicons name="add-circle-outline" size={32} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsSearching(!isSearching)}>
            <Ionicons name="search-outline" size={32} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar (conditionally rendered) */}
      {isSearching && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search forums..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onSubmitEditing={handleSearch}
          />
        </View>
      )}

      {/* List of Forums (showing all items) */}
      <FlatList
        data={forums}  // Show all forums
        keyExtractor={(item) => item.id}
        renderItem={renderForumItem}
        style={styles.forumsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', // Set background color for better contrast
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 5,
    flexShrink: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  searchContainer: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchInput: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
  },
  forumsList: {
    marginTop: 20,
  },
  forumContainer: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  forumTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // Spread out timeFrame and tags
    alignItems: 'center',
    marginBottom: 10,
  },
  timeFrame: {
    fontSize: 12,
    color: '#6c757d',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',  // Align tags to the right
  },
  tag: {
    backgroundColor: '#B9A2F1',
    color: 'white',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginLeft: 5,  // Margin to separate tags from each other
    fontSize: 10,  // Smaller font for the tags
  },
  visitButton: {
    flexDirection: 'row', // Align the icon and text in a row
    alignItems: 'center', // Ensure both are vertically aligned
    alignSelf: 'flex-start',
    backgroundColor: '#7129F2',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  visitIcon: {
    marginRight: 5,  // Adds space between the icon and text
  },
  visitButtonText: {
    color: 'white',
    fontSize: 14,
  },
});
