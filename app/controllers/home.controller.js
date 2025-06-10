import express from 'express';

export const homeController = () => express.static('public');