package com.beef.core.utils;

import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;

public class FileUtils {
    private static String UPLOAD_PATH = "/public/uploads/";

    public static String saveFile(HttpServletRequest request, MultipartFile file) {
        String fileName = String.format("%s%d_%s",
                UPLOAD_PATH, Utils.getRandomInt(), file.getOriginalFilename());
        File imageFile = new File(request.getRealPath(fileName));

        try {
            new File(UPLOAD_PATH).mkdir();
            file.transferTo(imageFile);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return fileName;
    }
}
