import { createTokenClient } from "@ethereum-tag-service/sdk-core";
const chainId = 421614;
const client = createTokenClient({ chainId });
const tag = "#rainbow";
const tagExists = await client?.tagExistsByString(tag);
export { tag, tagExists };
