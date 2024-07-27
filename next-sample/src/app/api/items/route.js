import { NextResponse } from 'next/server'
import dbConnection from '../../../db/mongodb';
import Item from '../../../models/item';

export async function POST(request) {
    const { title, description } = await request.json();
    await dbConnection();
    await Item.create({title, description});

    return NextResponse.json({msg: "Item Created successfully"}, {status: 201})
}

