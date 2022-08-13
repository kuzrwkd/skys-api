import { GetCommand, GetCommandInput, ScanCommand, ScanCommandInput } from '@aws-sdk/lib-dynamodb';
import { injectable } from 'tsyringe';

import { dynamodbDocument } from '@/util/dynamoDBClient';

@injectable()
export class NewsFeedDB {
  async getMediaById(mediaId: number) {
    try {
      // logger.info('NewsFeedDB [Media] レコード読み取り開始', getStartDbIoParams({ tracking_id }));
      // const startTime = processStartTime();

      const command: GetCommandInput = {
        TableName: process.env.MEDIA_TABLE_NAME,
        Key: {
          id: mediaId,
        },
      };

      const {
        Item: { id, name },
      } = await dynamodbDocument.send(new GetCommand(command));

      // const endTime = processEndTime(startTime);
      // logger.info(
      //   'NewsFeedDB [Media] レコード読み取り完了',
      //   getSuccessDbIoParams<typeof Item>({ tracking_id, time: endTime, result: Item }),
      // );

      return { id, name };
    } catch (e) {
      if (e instanceof Error) {
        // logger.error(
        //   `NewsFeedDB [Media] レコード読み取り失敗`,
        //   getFailedParams({ tracking_id, exception_class: e.name, stacktrace: e.stack as string }),
        // );
      }
    }
  }

  async scanNewsFeed() {
    // const { name: mediaName } = media;

    try {
      // logger.info(`NewsFeedDB [${mediaName}] レコード読み取り開始`, getStartDbIoParams({ tracking_id }));
      // const startTime = processStartTime();
      const command: ScanCommandInput = {
        TableName: process.env.NEWSFEED_TABLE_NAME,
      };

      const { Items } = await dynamodbDocument.send(new ScanCommand(command));

      // const endTime = processEndTime(startTime);
      // logger.info(
      //   `NewsFeedDB [${mediaName}] レコード読み取り完了`,
      //   getSuccessDbIoParams<typeof Items>({ tracking_id, time: endTime, result: Items }),
      // );

      if (!Items || Items.length === 0) {
        return undefined;
      }

      return Items;
    } catch (e) {
      if (e instanceof Error) {
        // logger.error(
        //   `NewsFeedDB [${mediaName}] レコード読み取り失敗`,
        //   getFailedParams({ tracking_id, exception_class: e.name, stacktrace: e.stack as string }),
        // );
      }
    }
  }
}
