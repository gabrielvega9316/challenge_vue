<template>
    <div class="search-icon">
      <svg class="search-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9.5 18a8.5 8.5 0 1 1 5.864-2.336L20.293 19.5l2.207-2.207-3.164-3.164A8.5 8.5 0 0 1 9.5 18zm0-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"/>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Search',
  };
  </script>
  
  <style>
  .search-icon {
    position: relative;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  
  .search-icon-svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: #333;
    transition: transform 0.3s;
  }
  
  .search-icon:hover .search-icon-svg {
    animation: shake 0.5s ease-in-out infinite;
  }
  
  @keyframes shake {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    25% {
      transform: translate(-50%, -50%) rotate(-10deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(10deg);
    }
    75% {
      transform: translate(-50%, -50%) rotate(-10deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
  </style>
  