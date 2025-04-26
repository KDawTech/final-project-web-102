# Web Development Final Project - HobbyHub

Submitted by: Kevon Dawkins

This web app: **Allows users to share their passion by creating posts with titles, content, and images. My topic is focused on being a software/hardware engineer and learning how both fields together enhance future opportunities. Users can create, view, edit, delete, upvote, and comment on posts.**

Time spent: **10 hours spent in total**

## Required Features

The following **required** functionality is completed:

- [x] **Web app includes a create form that allows the user to create posts**
  - Form requires users to add a post title
  - Forms allow users to add:
    - additional textual content
    - an image added as an external image URL
- [x] **Web app includes a home feed displaying previously created posts**
  - Displays title, creation time, and upvote count
  - Posts are sorted by newest first
  - Clicking a post opens a separate detail page
- [x] **Users can view posts in different ways**
  - Posts can be sorted by:
    - creation time
    - upvotes count
  - Users can search for posts by title
- [x] **Users can interact with each post in different ways**
  - Each post has a detail page showing:
    - content
    - image
    - comments
  - Users can leave comments
  - Posts can be upvoted multiple times
- [x] **A post that a user previously created can be edited or deleted from its post pages**
  - Posts have edit forms with pre-filled values
  - Users can delete posts from the detail page

## Optional Features

The following **optional** features are implemented:

- [x] Web app uses Row Level Security policies (SELECT and INSERT)
- [x] Posts include upvote counts that update instantly
- [x] Comments display with time of creation
- [x] Clean UI with light theme and responsive layout

## Additional Features

- [x] Comment section auto-refreshes when a new comment is added
- [x] Live upvote updates without refresh
- [x] Navigation bar with links to all pages
- [x] Minimal and accessible design

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/KDawTech/final-project-web-102/blob/main/final%20project.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **ScreenToGif**

## Notes

Challenges:
- Supabase Row Level Security blocked data until policies were configured correctly
- Used .env setup for storing Supabase API keys
- React state management with live updates was tricky to debug at first

## License

    Copyright 2025 Kevon Dawkins

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
