import { Application } from "express";
import express from "express";

export class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
    }
}