import { NextjsPlain } from 'devicons-react';
import { GitOriginal } from "devicons-react";
import { Css3Original } from "devicons-react";
import { Html5Original } from "devicons-react";
import { ReduxOriginal } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { NestjsOriginal } from 'devicons-react';
import { ExpressOriginal } from 'devicons-react';
import { TypescriptOriginal } from "devicons-react";
import { MaterialuiOriginal } from "devicons-react";
import { TailwindcssOriginal } from "devicons-react";
import { MysqlOriginalWordmark } from 'devicons-react';
import { NodejsOriginalWordmark } from 'devicons-react';
import { MaterializecssOriginal } from "devicons-react";
import { MongodbOriginalWordmark } from 'devicons-react';
import { PrismaOriginalWordmark } from 'devicons-react';

function Tech() {
    return (
        <div className={`dark:bg-custom-black dark:text-white`}>
            <div className="mx-8 pt-5">
                <h1 className='text-3xl font-semibold' style={{ color: '#30c67c' }}>Technologies I Use</h1>
                <p className="text-xl leading-7">
                    There’s a saying: “The right tools can make all the difference.” With that in mind, here are the technologies I rely on to build impactful solutions;
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-4">
                    <Html5Original size={70} className="mx-auto" />
                    <Css3Original size={70} className="mx-auto" />
                    <TypescriptOriginal size={70} className="mx-auto" />
                    <GitOriginal size={70} className="mx-auto" />
                    <ReactOriginal size={70} className="mx-auto" />
                    <MaterialuiOriginal size={70} className="mx-auto" />
                    <TailwindcssOriginal size={70} className="mx-auto" />
                    <PrismaOriginalWordmark size={70} className="mx-auto" />
                    <MaterializecssOriginal size={70} className="mx-auto" />
                    <NextjsPlain size={70} className="mx-auto" />
                    <ReduxOriginal size={70} className="mx-auto" />
                    <MysqlOriginalWordmark size={70} className="mx-auto" />
                    <MongodbOriginalWordmark size={70} className="mx-auto" />
                    <NodejsOriginalWordmark size={70} className="mx-auto" />
                    <ExpressOriginal size={70} className="mx-auto" />
                    <NestjsOriginal size={70} className="mx-auto" />
                </div>
            </div>
        </div>
    )
}

export default Tech;