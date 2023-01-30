// imports
import Prisma from "@prisma/client";

// new client
const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

// exporting
export { prisma };
