// Hey there! This is our main user profile screen that shows random user data
// We're using some cool libraries to make this look pretty
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';

// Let's make our components look fancy with NativeWind
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function UserScreen() {
  // Keep track of which user we're looking at
  const [index, setIndex] = useState(0);
  // Store all our random users here
  const [User, setUser] = useState([]);
  // Let's know when we're waiting for data
  const [isloading, setisloading] = useState(true);
  // In case something goes wrong, we'll show an error
  const [error, seterror] = useState("");

  // When the screen loads, let's grab some random users
  useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user?size=80')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setisloading(false);
      })
      .catch(error => {
        seterror(error);
        setisloading(false);
      });
  }, []);

  // Get the current user we're displaying
  const user = User[index];

  // Show a nice loading screen while we wait for data
  if (isloading) {
    return (
      <StyledView className="flex-1">
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          className="flex-1 justify-center items-center"
        >
          <StyledText className="text-xl text-white font-semibold">Loading...</StyledText>
        </LinearGradient>
      </StyledView>
    );
  }

  // Oops! Something went wrong. Let's show a friendly error message
  if (error) {
    return (
      <StyledView className="flex-1">
        <LinearGradient
          colors={['#ff6b6b', '#ee5253']}
          className="flex-1 justify-center items-center"
        >
          <StyledText className="text-lg text-white font-semibold">Error: {error}</StyledText>
        </LinearGradient>
      </StyledView>
    );
  }

  // Here's the main profile view - looking good!
  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        colors={['#f6f8fc', '#e9ecef']}
        className="flex-1"
      >
        <StyledView className="flex-1 p-4 justify-between">
          {/* Profile Picture and Name Section */}
          <StyledView className="items-center mb-4">
            <StyledView className="relative mb-4">
              <Image 
                source={{ uri: user.avatar }} 
                className="w-24 h-24 rounded-full border-4 border-white"
              />
              {/* Add a subtle shine effect to the profile picture */}
              <LinearGradient
                colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.3)']}
                className="absolute inset-0 rounded-full"
              />
            </StyledView>
            <StyledView className="items-center">
              <StyledText className="text-2xl font-bold text-gray-800 mb-1">
                {user.first_name} {user.last_name}
              </StyledText>
              <StyledText className="text-base text-gray-600 font-medium">
                @{user.username}
              </StyledText>
            </StyledView>
          </StyledView>

          {/* User Details Card */}
          <StyledView className="bg-white rounded-xl shadow-md mb-4 overflow-hidden">
            <LinearGradient
              colors={['#ffffff', '#f8f9fa']}
              className="p-4"
            >
              {/* Grid of user information */}
              <StyledView className="flex-row flex-wrap gap-2">
                {/* Name Card */}
                <StyledView className="flex-row items-center w-[48%] bg-white/50 p-2 rounded-lg">
                  <StyledView className="w-8 h-8 rounded-full bg-primary/10 justify-center items-center mr-2">
                    <Ionicons name="person-outline" size={20} color="#4c669f" />
                  </StyledView>
                  <StyledView className="flex-1">
                    <StyledText className="text-xs text-gray-600 font-medium mb-1">Name</StyledText>
                    <StyledText className="text-sm text-gray-800 font-medium" numberOfLines={1}>
                      {user.first_name} {user.last_name}
                    </StyledText>
                  </StyledView>
                </StyledView>

                {/* Username Card */}
                <StyledView className="flex-row items-center w-[48%] bg-white/50 p-2 rounded-lg">
                  <StyledView className="w-8 h-8 rounded-full bg-primary/10 justify-center items-center mr-2">
                    <Ionicons name="at-outline" size={20} color="#4c669f" />
                  </StyledView>
                  <StyledView className="flex-1">
                    <StyledText className="text-xs text-gray-600 font-medium mb-1">Username</StyledText>
                    <StyledText className="text-sm text-gray-800 font-medium" numberOfLines={1}>
                      @{user.username}
                    </StyledText>
                  </StyledView>
                </StyledView>

                {/* Email Card */}
                <StyledView className="flex-row items-center w-[48%] bg-white/50 p-2 rounded-lg">
                  <StyledView className="w-8 h-8 rounded-full bg-primary/10 justify-center items-center mr-2">
                    <Ionicons name="mail-outline" size={20} color="#4c669f" />
                  </StyledView>
                  <StyledView className="flex-1">
                    <StyledText className="text-xs text-gray-600 font-medium mb-1">Email</StyledText>
                    <StyledText className="text-sm text-gray-800 font-medium" numberOfLines={1}>
                      {user.email}
                    </StyledText>
                  </StyledView>
                </StyledView>

                {/* ID Card */}
                <StyledView className="flex-row items-center w-[48%] bg-white/50 p-2 rounded-lg">
                  <StyledView className="w-8 h-8 rounded-full bg-primary/10 justify-center items-center mr-2">
                    <Ionicons name="id-card-outline" size={20} color="#4c669f" />
                  </StyledView>
                  <StyledView className="flex-1">
                    <StyledText className="text-xs text-gray-600 font-medium mb-1">ID</StyledText>
                    <StyledText className="text-sm text-gray-800 font-medium" numberOfLines={1}>
                      {user.id}
                    </StyledText>
                  </StyledView>
                </StyledView>

                {/* UID Card */}
                <StyledView className="flex-row items-center w-[48%] bg-white/50 p-2 rounded-lg">
                  <StyledView className="w-8 h-8 rounded-full bg-primary/10 justify-center items-center mr-2">
                    <Ionicons name="key-outline" size={20} color="#4c669f" />
                  </StyledView>
                  <StyledView className="flex-1">
                    <StyledText className="text-xs text-gray-600 font-medium mb-1">UID</StyledText>
                    <StyledText className="text-sm text-gray-800 font-medium" numberOfLines={1}>
                      {user.uid}
                    </StyledText>
                  </StyledView>
                </StyledView>

                {/* Password Card - We show dots for security! */}
                <StyledView className="flex-row items-center w-[48%] bg-white/50 p-2 rounded-lg">
                  <StyledView className="w-8 h-8 rounded-full bg-primary/10 justify-center items-center mr-2">
                    <Ionicons name="lock-closed-outline" size={20} color="#4c669f" />
                  </StyledView>
                  <StyledView className="flex-1">
                    <StyledText className="text-xs text-gray-600 font-medium mb-1">Password</StyledText>
                    <StyledText className="text-sm text-gray-800 font-medium">
                      ••••••••
                    </StyledText>
                  </StyledView>
                </StyledView>
              </StyledView>
            </LinearGradient>
          </StyledView>

          {/* Navigation Controls */}
          <StyledView className="flex-row justify-center items-center gap-4">
            {/* Previous Button */}
            <StyledTouchableOpacity 
              className={`w-12 h-12 rounded-full overflow-hidden shadow-md ${index === 0 ? 'opacity-70' : ''}`}
              onPress={() => setIndex(index - 1)} 
              disabled={index === 0}
            >
              <LinearGradient
                colors={index === 0 ? ['#e9ecef', '#dee2e6'] : ['#4c669f', '#3b5998']}
                className="w-full h-full justify-center items-center"
              >
                <Ionicons 
                  name="chevron-back" 
                  size={20} 
                  color={index === 0 ? "#adb5bd" : "#ffffff"} 
                />
              </LinearGradient>
            </StyledTouchableOpacity>
            
            {/* Page Counter */}
            <StyledView className="bg-white px-4 py-2 rounded-full shadow-sm">
              <StyledText className="text-sm text-gray-800 font-semibold">
                {index + 1} / {User.length}
              </StyledText>
            </StyledView>
            
            {/* Next Button */}
            <StyledTouchableOpacity 
              className={`w-12 h-12 rounded-full overflow-hidden shadow-md ${index === User.length - 1 ? 'opacity-70' : ''}`}
              onPress={() => setIndex(index + 1)} 
              disabled={index === User.length - 1}
            >
              <LinearGradient
                colors={index === User.length - 1 ? ['#e9ecef', '#dee2e6'] : ['#4c669f', '#3b5998']}
                className="w-full h-full justify-center items-center"
              >
                <Ionicons 
                  name="chevron-forward" 
                  size={20} 
                  color={index === User.length - 1 ? "#adb5bd" : "#ffffff"} 
                />
              </LinearGradient>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </LinearGradient>
    </SafeAreaView>
  );
}


