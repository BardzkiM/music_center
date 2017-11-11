package com.beef.core.utils;

import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FileUtils {
    private static String UPLOAD_PATH = "/public/uploads/";

    public static String saveFile(HttpServletRequest request, MultipartFile file) {
        String fileName = Utils.getRandomInt() + file.getOriginalFilename();
        String filepath = String.format("%s%s", UPLOAD_PATH, fileName);
        File imageFile = new File(request.getRealPath(filepath));

        try {
            new File(UPLOAD_PATH).mkdir();
            file.transferTo(imageFile);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "/file/" + fileName;
    }

    public static byte[] getImage(HttpServletRequest request, String imageId) throws IOException {
        String path = request.getRealPath("/") + UPLOAD_PATH + "/" + imageId;

        return Files.readAllBytes(Paths.get(path));
    }

    public static byte[] getEmptyImage(HttpServletRequest request) throws IOException {
        String path = request.getRealPath("/") + "public/images/no_image.jpg";

        return Files.readAllBytes(Paths.get(path));
    }
}
